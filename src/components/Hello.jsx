export const Hello = (props) => {
  const { message1, message2 } = props;
  return (
    <>
      <h1>
        {message1} {message2}
      </h1>
    </>
  );
};
