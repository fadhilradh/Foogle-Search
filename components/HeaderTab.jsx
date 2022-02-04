function HeaderTab({ Icon, title, selected, href }) {
  return (
    <div
      className={`pb-2 flex items-center space-x-1 border-b-[3px] border-transparent hover:text-blue-500 hover:border-blue-600 ${
        selected && "text-blue-500 border-blue-600"
      }`}
    >
      <Icon className="h-4" />
      <a href={href} className="hidden sm:inline-flex">
        {title}
      </a>
    </div>
  );
}

export default HeaderTab;
