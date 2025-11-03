interface Props {
  message: string;
  createAt: string;
}

const BotMessage = ({ message, createAt }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="border rounded w-fit p-2">{message}</div>
      <p>{createAt}</p>
    </div>
  );
};

export default BotMessage;
