// import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import Button from "../ui/Button";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";
import CabinsTableOperations from "../features/cabins/CabinsTableOperations";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  // const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinsTableOperations />
      </Row>
      <Row>
        <CabinTable />
        {/* <Button onClick={() => setShowForm((showForm) => !showForm)}>
          {showForm ? "Cancel" : "Add Cabin"}
        </Button>
        {showForm && <CreateCabinForm />} */}
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
