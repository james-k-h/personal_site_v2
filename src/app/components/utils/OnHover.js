const OnHover = ({ children }) => {
  return (
    <div class="group">
      <p className="hidden group-hover:block">{children}</p>
    </div>
  );
};
export default OnHover;
