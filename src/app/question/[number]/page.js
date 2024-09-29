import dynamic from 'next/dynamic';

const Question = dynamic(() => import('../../../components/Question'), { ssr: false });

export function generateStaticParams() {
  return [{ number: '1' }, { number: '2' }, { number: '3' }, { number: '4' }, { number: '5' }];
}

const QuestionComponent = ({ params }) => {
  return <Question number={params.number} />;
};

export default QuestionComponent;
