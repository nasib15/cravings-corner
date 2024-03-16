const Cooking = () => {
  return (
    <div className="border rounded-2xl pt-8 pb-20">
      <h2 className="text-4xl text-center mx-auto">Want To Cook: 0</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button className="btn bg-[#0BE58A]">Preparing</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-4xl text-center mx-auto pt-8">
        Currently Cooking: 2
      </h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Total Time= 45 Minutes</td>
              <td>Total Calories= 600 Calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooking;
