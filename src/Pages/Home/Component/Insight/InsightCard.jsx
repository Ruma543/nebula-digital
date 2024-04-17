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
      <div className="h-[200px] 1xs:h-[200px] lg:h-[208px] 2xl:h-[274px] flex flex-col justify-between space-y-3">
        <h3
          className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-bold tracking-[-0.03em] xl:text-[22.5px] xl:leading-[27.23px] xl:font-bold xl:tracking-[-0.03em] 2xl:text-[30px] 2xl:leading-[36.31px] 2xl:font-bold 2xl:tracking-[-0.03em] "
          dangerouslySetInnerHTML={{ __html: formattedText }}
        >
          {/* {data.text1} */}
        </h3>
        <div>
          {' '}
          {linesText2.map((line, index) => (
            <h3
              key={index}
              className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-normal tracking-[-0.03em] 1xs:text-[19.2px] 1xs:leading-[23.24px] 1xs:font-normal 1xs:tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px] lg:font-normal lg:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-normal 2xl:tracking-[-0.03em] "
            >
              {line}
            </h3>
          ))}
        </div>
        <h3 className="text-[#091F5B] text-[16px] leading-[19.36px] font-bold tracking-[-0.03em] xl:text-[18px] xl:leading-[21.78px] xl:font-bold xl:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-bold 2xl:tracking-[-0.03em] underline">
          Read Full Article
        </h3>
      </div>
    </div>
  );
};

export default InsightCard;
