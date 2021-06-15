function Avatar({ url }) {
  return (
    <img
      src={url}
      className="rounded-full h-8 cursor-pointer transition duration-150 transform hover:scale-110"
      loading="lazy"
      alt="profile pic"
    />
  );
}

export default Avatar;
