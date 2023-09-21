import React from 'react';
import './NoCollected.scss';
const NoCollected = () => {
  return (
    <div className={'no-collected'}>
      <svg style={{marginRight: '10px'}} width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98799 3.28522L9.98835 3.29467C10.0145 4.72099 10.047 6.49611 9.47166 8.10911C9.1562 8.99366 8.67885 9.76259 8.05294 10.3947C7.34041 11.1142 6.40729 11.6859 5.27957 12.0937C5.24266 12.107 5.20422 12.1178 5.16534 12.1259C5.1106 12.1372 5.05532 12.1429 5.00013 12.1429C4.94494 12.1429 4.88975 12.1372 4.83492 12.1259C4.79603 12.1178 4.75787 12.1071 4.72113 12.0938C3.59208 11.6868 2.65797 11.1155 1.94481 10.3958C1.31864 9.76389 0.84128 8.99514 0.52609 8.11078C-0.0471305 6.5026 -0.0145183 4.73081 0.0117326 3.30717L0.0122702 3.28522C0.017377 3.16775 0.0208711 3.04435 0.0228422 2.90798C0.0324287 2.23836 0.547234 1.68454 1.19473 1.64721C2.5449 1.5692 3.58939 1.11396 4.48183 0.21449L4.48945 0.206986C4.78062 -0.0689955 5.21972 -0.0689955 5.51081 0.206986L5.51843 0.21449C6.41087 1.11396 7.45535 1.5692 8.80553 1.64711C9.45311 1.68454 9.96783 2.23836 9.97742 2.90789C9.97948 3.04518 9.98288 3.16858 9.98799 3.28522ZM4.14758 6.78863L6.48753 4.45882C6.71918 4.22801 7.09473 4.22801 7.32638 4.45882C7.55787 4.68931 7.55787 5.06323 7.32638 5.29388L4.56693 8.04138C4.4511 8.1567 4.29934 8.21429 4.14758 8.21429C3.99582 8.21429 3.84406 8.1567 3.72823 8.04138L2.67362 6.99133C2.44213 6.76084 2.44213 6.38692 2.67362 6.15627C2.90527 5.92562 3.28082 5.92562 3.51247 6.15627L4.14758 6.78863Z" fill="#B5C4FF"></path></svg>
      No biometric data collected. All recognition process performs on your device.
    </div>
  );
};

export default NoCollected;
