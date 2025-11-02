

const InputBox = () => {
  return (
    <div>
      <div className="border rounded w-fit p-1">
        <input type="text" className="border-none outline-none focus:outline-none"/>
        <i className="fa-solid fa-microphone bg-gray-300 px-1 py-1 rounded-full hover:cursor-pointer"></i>
        <button type="button" className="bg-gray-300 ml-1 pr-1 pl-1 rounded hover:cursor-pointer">button</button>
      </div>
    </div>
  );
};

export default InputBox;