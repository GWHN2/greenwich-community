import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import GlobalFilter from "./GlobalFilter";
import Button from "./Button";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/solid";

const Table = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // globalFilter,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    setFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns: "typeAlert" },
    },
    useFilters,
    useGlobalFilter,
    useSortBy, // puts sort below the global filter
    usePagination // puts the pagination on the bottom
  );

  // Render the UI for your table
  return (
    <div className="container-table pb-14">
      <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
        <div className="flex items-center w-full mb-5 lg:w-auto">
          <select
            className="px-5 py-2 ml-2 rounded-lg shadow"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Showing {pageSize}
              </option>
            ))}
          </select>
        </div>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={""} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // Add the sorting props to control sorting.
                <th
                  /* Add a sort direction indicator */
                  key={""}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div className="flex items-center">
                    <div className="w-4 mr-1">
                      {column.isSorted ? (
                        <>
                          {column.isSortedDesc ? (
                            <ArrowDownIcon className="text-black" />
                          ) : (
                            <ArrowUpIcon className="text-black" />
                          )}
                        </>
                      ) : (
                        <ArrowsRightLeftIcon className="text-gray-400" />
                      )}
                    </div>
                    {column.render("Header")}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={""} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-center">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <div>
              <ChevronLeftIcon className="w-5 h-5 text-gray-500 hover:text-white" />
            </div>
          </button>
          <Button gotoPage={gotoPage} page={1} selectedPage={pageIndex} />
          {pageCount > 1 && (
            <>
              {pageIndex < 5 - 1 ? (
                <>
                  {Array.from(
                    { length: pageCount < 5 ? pageCount - 2 : 5 - 1 },
                    (v, k) => k + 2
                  ).map((page, index) => (
                    <Button
                      key={index}
                      gotoPage={gotoPage}
                      page={page}
                      selectedPage={pageIndex}
                    />
                  ))}
                  {pageCount > 5 && <span>...</span>}
                </>
              ) : (
                <>
                  {pageIndex > pageCount - 5 ? (
                    <>
                      <span>...</span>
                      {Array.from(
                        { length: 5 - 1 },
                        (v, k) => k + pageCount - (5 - 1)
                      ).map((page, index) => (
                        <Button
                          key={index}
                          gotoPage={gotoPage}
                          page={page}
                          selectedPage={pageIndex}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      <span>...</span>
                      {Array.from({ length: 3 }, (v, k) => k + pageIndex).map(
                        (page, index) => (
                          <Button
                            key={index}
                            gotoPage={gotoPage}
                            page={page}
                            selectedPage={pageIndex}
                          />
                        )
                      )}
                      <span>...</span>
                    </>
                  )}
                </>
              )}
              <Button
                gotoPage={gotoPage}
                page={pageCount}
                selectedPage={pageIndex}
              />
            </>
          )}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500 hover:text-white" />
            </div>
          </button>
        </div>
        <div>
          <span>
            Showing
            <strong> {pageIndex * pageSize + 1} </strong>
            to
            <strong>
              {" "}
              {(pageIndex + 1) * pageSize > preGlobalFilteredRows.length
                ? preGlobalFilteredRows.length
                : (pageIndex + 1) * pageSize}{" "}
            </strong>
            of
            <strong> {preGlobalFilteredRows.length} </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;
