const ErrorMsg = ({ items }) => {
  return (
    <>{items.length === 0 ? <h3>Sorry! Fruits not available now</h3> : null}</>
  );
};

export default ErrorMsg;
