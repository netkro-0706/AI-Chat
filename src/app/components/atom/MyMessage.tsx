interface Props {
  message: string;
  createAt: string;
}

const MyMessage = ({ message, createAt }: Props) => {
  return (
    <div className="flex flex-col items-end">
      <div className="border rounded w-fit max-w-full p-2 float-left wrap-break-word">
        {message}
      </div>
      <p>{createAt}</p>
    </div>
  );
};

export default MyMessage;
