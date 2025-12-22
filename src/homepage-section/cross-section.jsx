import React from 'react';

const items = [
  'TILE ADHESIVE',
  'GROUT & SEALANTS',
  'WATERPROOFING',
  'BLOCK JOINTING MORTAR',
  'WALL PUTTY',
];

const InfiniteBanner = () => {
  const repeatedItems = [...items, ...items, ...items];

  const renderTrack = (prefix) => (
    <div className="banner-track">
      {repeatedItems.map((item, index) => (
        <React.Fragment key={`${prefix}-${index}`}>
          <span className="text-item">{item}</span>
          {index < repeatedItems.length - 1 && <span className="separator">■</span>}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="infinite-scroll">
      <div className="container">
        <div className="infinite-content">
          <div className="banner banner-light white-color f-26 f-m-22 w-600 second-font l-h-1">
            {renderTrack('light')}
            {renderTrack('light-dup')}  {/* Duplicate for seamless loop */}
          </div>

          <div className="banner banner-dark black-color f-26 f-m-22 w-600 second-font l-h-1">
            {renderTrack('dark')}
            {renderTrack('dark-dup')}   {/* Duplicate for seamless loop */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteBanner;