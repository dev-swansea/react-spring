const PageComponent = ({serverData, movePage}) => {
  console.log(serverData);
  return (
    <div className="m-6 flex justify-center">
      {/* 이전 버튼 */}
      {serverData.prev ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({page: serverData.prevPage})}
        >
          Prev
        </div>
      ) : (
        <></>
      )}
      {/* 페이지 네이션 */}
      {serverData.pageNumList.map(pageNum => (
        <div
          key={pageNum}
          className={`m-2 p-2 text-center rounded shadow-md text-white cursor-pointer ${
            serverData.current === pageNum ? "bg-gray-500" : "bg-blue-400"
          }`}
          onClick={() => movePage({page: pageNum})}
        >
          {pageNum}
        </div>
      ))}
      {/* 다음 버튼 */}
      {serverData.next ? (
        <div
          className="m-2 p-2 w-16 text-center font-bold text-blue-400"
          onClick={() => movePage({page: serverData.nextPage})}
          Next
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PageComponent;
