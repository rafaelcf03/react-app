export default function Footer({ showModal, handleToggleModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>{data?.title}</h1>
        <h2>
          {data?.copyright ? (
            <span>
              <i className="fa-regular fa-copyright"></i> Copyright:{" "}
              {data?.copyright}
            </span>
          ) : (
            ""
          )}
        </h2>
      </div>
      <button onClick={() => handleToggleModal()}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
