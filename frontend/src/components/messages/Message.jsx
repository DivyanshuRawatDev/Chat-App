const Message = () => {
  return (
    <div className="chat chat-end ">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className={`chat-bubble bg-blue-500 text-white pb-2`}>Hi!!! What is upp?</div>
      <div className="chat-footer  text-xs flex gap-1 items-center">12:24</div>
    </div>
  );
};

export default Message;
