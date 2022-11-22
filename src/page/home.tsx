import React from "react";
import { FiFilter } from "react-icons/fi";
import { CgPushDown } from "react-icons/cg";
import IconButton from "../Component/lib/Button/IconButton";
import SearchInput from "../Component/lib/Form/SearchInput";
import Button from "../Component/lib/Button/Button";
import AssignTable from "../Component/Assigning/AssignTable";
import Modal from "../Component/Modal/Modal";
import FilterDropdown from "../Component/FilterDropdown";

const Home = () => {
  const [filterModal, setFilterModal] = React.useState<boolean>(false);
  const [filterDropdown, setFilterDropdown] = React.useState<boolean>(false);
  return (
    <div className="h-full font-roboto p-3 px-5 pb-10 flex flex-col">
      <div className="pb-4 flex items-center justify-between">
        <h3 className="text-3xl font-semibold">Overview</h3>
        <div></div>
      </div>
      <div className="flex-grow h-full bg-white overflow-hidden border shadow-sm rounded-md flex flex-col">
        <div className="p-3 border-b flex items-center justify-between">
          <SearchInput placeholder="Search" />
          <div className="flex items-center gap-2">
            <IconButton
              onClick={() => setFilterModal(true)}
              bgColor="bg-green-100"
            >
              <FiFilter />
            </IconButton>
            {/* <div className="relative">
              <IconButton
                onClick={() => setFilterDropdown(!filterDropdown)}
                bgColor="bg-green-100"
              >
                <FiFilter />
              </IconButton>
              <FilterDropdown
                isOpen={filterDropdown}
                onClose={() => setFilterDropdown(false)}
              />
            </div> */}
            <IconButton bgColor="bg-green-100">
              <CgPushDown />
            </IconButton>
          </div>
        </div>
        {/* assign table */}
        <div className="flex-grow h-full overflow-y-auto scrollbar-style">
          <AssignTable />
        </div>
        <div className="py-3 border-t flex items-center justify-center">
          <Button>View more</Button>
        </div>
      </div>

      {/* filter modal */}
      <Modal isOpen={filterModal} onClose={() => setFilterModal(false)}>
        <div className="p-3  w-[500px]">
          <div>The filter bar</div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
