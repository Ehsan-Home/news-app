const GeneralError = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4" style={{ color: "red" }}>
          Error!
        </h1>
      </div>
      <div className="border py-3">
        <ul>
          The reasons can be:
          <li>
            It is possible that we have hit the maximum usage for News APIs.
            Please be aware that our access to news APIs is restricted to 1000
            calls per day.
          </li>
        </ul>
      </div>
    </>
  );
};

export default GeneralError;
