export default function SideBar({ handleToggleModal, data }) {
  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={() => handleToggleModal()} />
      <div className="sidebarContents">
        <h2>The picture of the day</h2>
        <div className="descriptionContainer">
          <h3>
            {data?.title} {data?.copyright ? 'by ' + data?.copyright : ""}
          </h3>
          <hr />
          <p className="descriptionTitle">{data?.date}</p>
          <p className="descriptionTitle">{data?.explanation}</p>
        </div>
        <button onClick={() => handleToggleModal()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
