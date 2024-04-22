import React from 'react';

const UseCaseCard = ({ data }) => {
  const { id, img, value, text1, text2 } = data | {};
  // for using break
  const lines = data.text1 ? data.text1.split('\n') : [];
  const words = lines.length > 0 ? lines[0].split(' ') : [];
  // for line break for text2
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
    // <div
    //   className=" rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px] border-8 border-white"
    //   key={id}
    // >
    //   <img
    //     className="w-full h-[325.67px] sm:h-[389px] xl:h-[364.5px] 2xl:h-[486px] mb-[20.9px] sm:mb-[24px] xl:mb-[22.5px] 2xl:mb-[30px] rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px] object-cover"
    //     src={data.img}
    //     alt=""
    //   />
    //   <div className="h-180px xl:h-[208px] 2xl:h-[274px] flex flex-col justify-between">
    //     <h3
    //       className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-bold tracking-[-0.03em] 1xs:text-[19.2px] 1xs:leading-[23.24px] 1xs:font-bold 1xs:tracking-[-0.03em] lg:text-[22.5px] lg:leading-[27.23px] lg:font-bold lg:tracking-[-0.03em] 2xl:text-[30px] 2xl:leading-[36.31px] 2xl:font-bold 2xl:tracking-[-0.03em] "
    //       dangerouslySetInnerHTML={{ __html: formattedText }}
    //     >
    //       {/* {data.text1} */}
    //     </h3>
    //     {/* <h3 className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-normal tracking-[-0.03em] 1xs:text-[19.2px] 1xs:leading-[23.24px] 1xs:font-normal 1xs:tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px] lg:font-normal lg:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-normal 2xl:tracking-[-0.03em]">
    //       {data.text2}
    //     </h3> */}
    //     <div>
    //       {linesText2.map((line, index) => (
    //         <h3
    //           key={index}
    //           className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-normal tracking-[-0.03em] 1xs:text-[19.2px] 1xs:leading-[23.24px] 1xs:font-normal 1xs:tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px] lg:font-normal lg:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-normal 2xl:tracking-[-0.03em]"
    //         >
    //           {line}
    //         </h3>
    //       ))}
    //     </div>
    //     <h3 className="text-[#091F5B] text-[16px] leading-[19.36px] font-bold 1xs:tracking-[-0.03em] 1xs:text-[16px] 1xs:leading-[19.36px] 1xs:font-bold tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px] lg:font-bold lg:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-bold 2xl:tracking-[-0.03em] underline">
    //       Learn More
    //     </h3>
    //   </div>
    // </div>
    // <div
    //   className="border-2 border-white xl:border-8 xl:border-white rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px] "
    //   key={id}
    // >
    //   {/* border-8 border-[#EDF0F5] */}
    //   <img
    //     className="w-full h-[320.67px] 1xs:h-[383px] xl:h-[358.5px] 2xl:h-[480px] mb-[20.9px] 1xs:mb-[24px] lg:mb-[22.5px] 2xl:mb-[30px]  rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px]"
    //     src={data.img}
    //     alt=""
    //   />
    //   {/* h-[325.67px] sm:h-[389px] xl:h-[364.5px] 2xl:h-[486px] */}
    //   <div className="h-[200px] 1xs:h-[200px] lg:h-[208px] 2xl:h-[274px] flex flex-col justify-between space-y-3">
    //     <h3
    //       className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-bold tracking-[-0.03em] xl:text-[22.5px] xl:leading-[27.23px] xl:font-bold xl:tracking-[-0.03em] 2xl:text-[30px] 2xl:leading-[36.31px] 2xl:font-bold 2xl:tracking-[-0.03em] "
    //       dangerouslySetInnerHTML={{ __html: formattedText }}
    //     >
    //       {/* {data.text1} */}
    //     </h3>
    //     <div>
    //       {' '}
    //       {/* {linesText2.map((line, index) => ( */}
    //       <h3
    //         // key={index}
    //         className="text-[#091F5B] text-[19.2px] leading-[23.24px] font-normal tracking-[-0.03em] 1xs:text-[19.2px] 1xs:leading-[23.24px] 1xs:font-normal 1xs:tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px] lg:font-normal lg:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-normal 2xl:tracking-[-0.03em] "
    //       >
    //         {data.text2}
    //       </h3>
    //       {/* ))} */}
    //     </div>
    //     <h3 className="text-[#091F5B] text-[16px] leading-[19.36px] font-bold tracking-[-0.03em] xl:text-[18px] xl:leading-[21.78px] xl:font-bold xl:tracking-[-0.03em] 2xl:text-[24px] 2xl:leading-[29.5px] 2xl:font-bold 2xl:tracking-[-0.03em] underline">
    //       Learn More
    //     </h3>
    //   </div>
    // </div>
    <div
      className="border-8 border-white  rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px] "
      key={id}
    >
      <img
        className="w-full h-[320.67px] 1xs:h-[383px] sm:h-[383px]  xl:h-[358.5px] 2xl:h-[480px] mb-[20.9px] 1xs:mb-[24px] lg:mb-[22.5px] 2xl:mb-[30px]  rounded-[24px]  xl:rounded-[22.5px]  2xl:rounded-[30px]"
        src={data.img}
        alt=""
      />
      {/* h-[325.67px] sm:h-[389px] xl:h-[364.5px] 2xl:h-[486px] */}
      <div className="relative flex flex-col justify-between gap-3 h-[150px] md:h-[220px] lg:h-[220px] xl:h-[222px] 2xl:h-[300px]">
        {/* h-[200px] 1xs:h-[200px] lg:h-[208px] 2xl:h-[274px] */}
        <div className="flex flex-col justify-between gap-3">
          <h3
            className="w-11/12 md:w-3/4 xl:w-11/12 2xl:w-10/12 text-[#091F5B] text-[22.5px] leading-[27.23px] 1xs:text-[22.5px] 1xs:leading-[27.23px] sm:text-[22.5px] sm:leading-[27.23px] font-bold tracking-[-0.03em] lg:text-[22.5px] lg:leading-[27.23px]  2xl:text-[25px] 2xl:leading-[28px]  "
            // dangerouslySetInnerHTML={{ __html: formattedText }}
          >
            {data.text1}
          </h3>
          <h3
            // key={index}
            className=" w-full lg:w-5/6 xl:w-11/12 text-[#091F5B] text-[22.5px] leading-[27.23px] font-normal tracking-[-0.03em] 1xs:text-[22.5px] 1xs:leading-[27.23px]  sm:text-[22.5px] sm:leading-[27.23px] lg:text-[18px] lg:leading-[21.78px]  2xl:text-[24px] 2xl:leading-[29.5px]  "
          >
            {data.text2}
          </h3>
        </div>

        <div className="absolute bottom-0">
          <h3 className="text-[#091F5B] text-[18px] leading-[21.78px] 1xs:text-[18px] 1xs:leading-[21.78px] sm:text-[18px] sm:leading-[21.78px] font-bold tracking-[-0.03em] lg:text-[18px] lg:leading-[21.78px]  2xl:text-[24px] 2xl:leading-[29.5px] underline">
            Learn More
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;
