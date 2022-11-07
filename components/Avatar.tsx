function Avatar({ url, className }) {
  return (
    <img
      src={url}
      className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      alt="profile pic"
    />
  );
}

export default Avatar;
