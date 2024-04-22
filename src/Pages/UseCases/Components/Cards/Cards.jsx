import React from 'react';
import SingleCard from './SingleCard';

const Cards = () => {
  const values = [
    {
      id: '01',
      title1: 'Use Cases',
      title2: 'LLM Model',
      firstText: 'AI assistant using',
      spanText: 'LLM model for a',
      lastText: 'Fortune 500 company',
      text2:
        'Fine-tuned a Large Language Model (LLM) using enterprise specific data to answer natural language query about an enterprise business offering. ',
    },
    {
      id: '02',
      title1: 'Use Cases',
      title2: 'Personalized Lea',

      firstText: '',
      spanText: 'Personalized and adaptive learning ',
      lastText: 'with AI agent for a Big Tech giant',
      text2:
        'A Reinforcement learning model that learns adaptive course content delivery policy based on learners’ interaction.',
    },
    {
      id: '03',
      title1: 'Use Cases',
      title2: 'MTA Model',

      firstText: '',
      spanText: 'Multi Touch Attribution (MTA) ',
      lastText: 'model for a global tech company',
      text2:
        'The model estimates relative impact of various digital marketing channel for each customer signups. MTA scores are used as a metric to quickly (e.g. weekly) identify changes in performance and optimize campaigns on an ongoing basis.  ',
    },
    {
      id: '04',
      title1: 'Use Cases',
      title2: 'Personalized Recommendation',

      firstText: 'Personalized ',
      spanText: 'product & service recommendation ',
      lastText: 'for a cloud company',
      text2:
        'This ML algorithm analyzes a wide array of customer attributes to paint a robust picture of each customer’s preferences. When these attributes indicate interest in the target service, the model produces a recommendation. ',
    },
    {
      id: '05',
      title1: 'Use Cases',
      title2: 'Lead Scoring Model',

      firstText: '',
      spanText: 'Lead scoring',
      lastText: 'model for global tech company',
      text2:
        'Lead Scoring model ranks marketing leads based on their probability of engagement. The model was deployed for North America, Europe (few region) and Middle East region of AWS digital marketing team. For email campaigns, this model generated 3-times higher engagement (click to open rate) than baseline.  ',
    },
    {
      id: '06',
      title1: 'Use Cases',
      title2: 'Churn Management Model',

      firstText: '',
      spanText: 'Churn management ',
      lastText: 'model',
      text2:
        'The model predicts churn probability of customers and recommends personalized intervention to retain customer.',
    },
  ];
  return (
    <div className="mb-[160px] lg:mb-[120px] 2xl:mb-[160px]">
      <div className="">
        {' '}
        {/* {values.map(data => ( */}
        <SingleCard></SingleCard>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Cards;
