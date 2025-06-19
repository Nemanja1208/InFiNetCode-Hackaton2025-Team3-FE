import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { sessionId } = useParams();

  return (
    <div className='min-h-screen p-4'>
      <h1 className='text-2xl font-bold mb-4'>Chat Page</h1>
      <p>Session ID: {sessionId}</p>
    </div>
  );
};

export default ChatPage;
