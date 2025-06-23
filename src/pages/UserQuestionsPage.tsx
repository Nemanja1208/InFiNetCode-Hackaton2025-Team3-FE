import { useState } from 'react';

const UserQuestionsPage = () => {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaPurpose, setIdeaPurpose] = useState('');
  const [ideaGoal, setIdeaGoal] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = () =>
    ideaTitle.trim() &&
    ideaPurpose.trim() &&
    ideaGoal.trim() &&
    targetAudience.trim() &&
    experienceLevel.trim() &&
    timeEstimate.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      Ideas: {
        Title: ideaTitle,
        Audience: targetAudience,
        Purpose: ideaPurpose,
      },
      Mvp_Plans: {
        Goal: ideaGoal,
        TimeEstimate: timeEstimate,
      },
      User: {
        Level: experienceLevel,
      },
    };

    console.log('Payload to be sent:', payload);

    // TODO: Replace console.log with POST request to backend when ready
    // TODO: Add redirect to AI chat flow after successful POST

    setIsSubmitting(false);
  };

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4'>
      <div className='max-w-2xl mx-auto bg-white p-8 rounded shadow'>
        <h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>
          Tell us about your idea
        </h1>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label className='block font-medium mb-1'>What is your idea?</label>
            <input
              type='text'
              value={ideaTitle}
              onChange={(e) => setIdeaTitle(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              What is the purpose of your application?
            </label>
            <textarea
              value={ideaPurpose}
              onChange={(e) => setIdeaPurpose(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              What do you want to achieve with this project?
            </label>
            <textarea
              value={ideaGoal}
              onChange={(e) => setIdeaGoal(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              Who is your target audience?
            </label>
            <input
              type='text'
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>

          <div>
            <label className='block font-medium mb-1'>
              How much experience do you have?
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring focus:border-blue-400'
            >
              <option value=''>Select experience level</option>
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </select>
          </div>

          <div>
            <label className='block font-medium mb-1'>
              How much time do you want to spend on this project?
            </label>
            <input
              type='text'
              value={timeEstimate}
              onChange={(e) => setTimeEstimate(e.target.value)}
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400'
            />
          </div>

          <button
            type='submit'
            disabled={!isFormValid() || isSubmitting}
            className={`w-full text-white py-2 px-4 rounded transition-colors ${
              isSubmitting || !isFormValid()
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit & Preview Payload'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserQuestionsPage;
