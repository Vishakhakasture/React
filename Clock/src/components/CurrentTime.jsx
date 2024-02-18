const CurrentTime = () => {
  let time = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayName = days[new Date().getDay()];
  let date = new Date();

  return (
    <div>
      <div>
        <p>
          {dayName} | {date.toLocaleDateString()}
        </p>
      </div>
      <p>This is the current time of India - {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrentTime;
