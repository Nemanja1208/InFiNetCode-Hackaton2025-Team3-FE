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
        Description: `${ideaPurpose}\n\nTarget Audience: ${targetAudience}`,
        Status: ideaPurpose,
      },
      Mvp_Plans: {
        Summary: ideaGoal,
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
    <div>
      <h1>Tell us about your idea</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>What is your idea?</label>
          <input
            type='text'
            value={ideaTitle}
            onChange={(e) => setIdeaTitle(e.target.value)}
          />
        </div>

        <div>
          <label>What is the purpose of your application?</label>
          <textarea
            value={ideaPurpose}
            onChange={(e) => setIdeaPurpose(e.target.value)}
          />
        </div>

        <div>
          <label>What do you want to achieve with this project?</label>
          <textarea
            value={ideaGoal}
            onChange={(e) => setIdeaGoal(e.target.value)}
          />
        </div>

        <div>
          <label>Who is your target audience?</label>
          <input
            type='text'
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
          />
        </div>

        <div>
          <label>How much experience do you have?</label>
          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option value=''>Select experience level</option>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Advanced'>Advanced</option>
          </select>
        </div>

        <div>
          <label>How much time do you want to spend on this project?</label>
          <input
            type='text'
            value={timeEstimate}
            onChange={(e) => setTimeEstimate(e.target.value)}
          />
        </div>

        <button type='submit' disabled={!isFormValid() || isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit & Preview Payload'}
        </button>
      </form>

      {/* TODO: Add styling (CSS Modules, Tailwind, or Chakra) later */}
      {/* TODO: Replace alert with better UX feedback */}
    </div>
  );
};

export default UserQuestionsPage;
