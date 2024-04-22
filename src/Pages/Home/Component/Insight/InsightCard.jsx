import React from 'react';

const InsightCard = ({ data }) => {
  const { id, img, text1, text2 } = data | {};
  // for using break
  const lines = data.text1 ? data.text1.split('\n') : [];
  const words = lines.length > 0 ? lines[0].split(' ') : [];
  // for text2 break line
  const linesText2 = data.text2 ? data.text2.split('\n') : [];

  const firstLineChunks = [];
  for (let i = 0; i < words.length; i += 3) {
    if (i === 3) {
      // Add a line break after the first three words
      firstLineChunks.push(words.slice(i, i + 3).join(' ') + '<br>');
    } else {
      firstLineChunks.push(words.slice(i, i + 3).join(' '));
    }
  }

  const formattedFirstLine = firstLineChunks.join('');

  const formattedText =
    lines.length > 1 ? `${formattedFirstLine}${lines[1]}` : formattedFirstLine;
  return (
    <div
      className="border-8 border-[#EDF0F5]  rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px] "
      key={id}
    >
      <img
        className="w-full h-[320.67px] 1xs:h-[383px] xl:h-[358.5px] 2xl:h-[480px] mb-[20.9px] 1xs:mb-[24px] lg:mb-[22.5px] 2xl:mb-[30px]  rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px]"
        src={data.img}
        alt=""
      />
      {/* h-[325.67px] sm:h-[389px] xl:h-[364.5px] 2xl:h-[486px] */}
      <div className=" flex flex-col justify-between space-y-3">
        {/* h-[200px] 1xs:h-[200px] lg:h-[208px] 2xl:h-[274px] */}
        <h3
          className="w-11/12  text-[#091F5B] text-[22.5px] leading-[27.23px] 1xs:text-[22.5px] 1xs:leading-[27.23px] sm:text-[22.5px] sm:leading-[27.23px] font-bold tracking-[-0.03em] lg:text-[22.5px] lg:leading-[27.23px]  2xl:text-[30px] 2xl:leading-[36.31px]  "
          // dangerouslySetInnerHTML={{ __html: formattedText }}
        >
          {data.text1}
        </h3>
        <div>
          {' '}
          {/* {linesText2.map((line, index) => ( */}
          <h3
            // key={index}
            className=" w-full lg:w-5/6 text-[#091F5B] text-[22.5px] leading-[27.23px] font-normal tracking-[-0.03em] 1xs:text-[22.5px] 1xs:leading-[27.23px]  sm:text-[22.5px] sm:leading-[27.23px] lg:text-[18px] lg:leading-[21.78px]  2xl:text-[24px] 2xl:leading-[29.5px]  "
          >
            {data.text2}
          </h3>
          {/* ))} */}
        </div>
        <h3 className="text-[#091F5B] text-[18px] leading-[21.78px] 1xs:text-[18px] 1xs:leading-[21.78px] sm:text-[18px] sm:leading-[21.78px] font-bold tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px]  2xl:text-[24px] 2xl:leading-[29.5px] underline">
          Read Full Article
        </h3>
      </div>
    </div>
  );
};

export default InsightCard;
