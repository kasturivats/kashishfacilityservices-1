import FormContainer from "./FormContainer";

const About = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center about ">
        <div className="row mt-3">
          <div className="col-12">
            <div className="rounded p-3 text-wrapper">
              <h4>Transforming Cleanliness:</h4>
              <h4>Our Commitment, Your Comfort</h4>
            </div>
          </div>
          <div className="left-section bg-white mx-4 p-3 rounded">
            <div className="col-12 my-4">
              <FormContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
