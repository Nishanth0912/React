import React, { useEffect, useReducer } from "react";

// 🔹 Initial State
const initialState = {
  formData: { name: "", number: "", topics: "", category: "" },
  finalData: [],
  editIndex: null,
  showDetails: null,
};

// 🔹 Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "SET_FORMDATA":
      return {
        ...state,
        formData: { ...state.formData, [action.field]: action.value },
      };

    case "SET_ALL_DATA":
      return { ...state, finalData: action.payload };

    case "ADD_DATA": {
      const updatedData = [...state.finalData, state.formData];
      localStorage.setItem("user_datas", JSON.stringify(updatedData));
      return { ...state, finalData: updatedData, formData: initialState.formData };
    }

    case "DELETE_DATA": {
      const filtered = state.finalData.filter((_, i) => i !== action.index);
      localStorage.setItem("user_datas", JSON.stringify(filtered));
      return { ...state, finalData: filtered };
    }

    case "EDIT_DATA": {
      return {
        ...state,
        formData: state.finalData[action.index],
        editIndex: action.index,
      };
    }

    case "UPDATE_DATA": {
      const updated = state.finalData.map((item, i) =>
        i === state.editIndex ? state.formData : item
      );
      localStorage.setItem("user_datas", JSON.stringify(updated));
      return {
        ...state,
        finalData: updated,
        formData: initialState.formData,
        editIndex: null,
      };
    }

    case "SHOW_DETAILS": {
      return { ...state, showDetails: state.finalData[action.index] };
    }

    case "CLOSE_DETAILS":
      return { ...state, showDetails: null };

    default:
      return state;
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 🔹 Load from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user_datas")) || [];
    dispatch({ type: "SET_ALL_DATA", payload: stored });
  }, []);

  // 🔹 Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.editIndex !== null) {
      dispatch({ type: "UPDATE_DATA" });
      alert("Data updated successfully ✅");
    } else {
      dispatch({ type: "ADD_DATA" });
      alert("Submitted successfully ✅");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Form Section */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {state.editIndex !== null ? "Edit User" : "Submit Your Topic"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={state.formData.name}
              onChange={(e) =>
                dispatch({ type: "SET_FORMDATA", field: e.target.name, value: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number
            </label>
            <input
              type="number"
              name="number"
              value={state.formData.number}
              onChange={(e) =>
                dispatch({ type: "SET_FORMDATA", field: e.target.name, value: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="topics" className="block text-sm font-medium text-gray-700 mb-2">
              Tamil Topics
            </label>
            <input
              type="text"
              name="topics"
              value={state.formData.topics}
              onChange={(e) =>
                dispatch({ type: "SET_FORMDATA", field: e.target.name, value: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              name="category"
              value={state.formData.category}
              onChange={(e) =>
                dispatch({ type: "SET_FORMDATA", field: e.target.name, value: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">--Select Category--</option>
              <option value="Mahabharatham">Mahabharatham</option>
              <option value="Ramayanam">Ramayanam</option>
              <option value="Bible">Bible</option>
              <option value="Quran">Quran</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            {state.editIndex !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">User Data</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Topics
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {state.finalData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.topics}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => dispatch({ type: "EDIT_DATA", index })}
                      className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch({ type: "DELETE_DATA", index })}
                      className="text-red-600 hover:text-red-900 transition-colors duration-200"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => dispatch({ type: "SHOW_DETAILS", index })}
                      className="text-green-600 hover:text-green-900 transition-colors duration-200"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {state.showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h3 className="text-lg font-semibold mb-4 text-center">User Details</h3>
            <p><strong>Name:</strong> {state.showDetails.name}</p>
            <p><strong>Mobile:</strong> {state.showDetails.number}</p>
            <p><strong>Topic:</strong> {state.showDetails.topics}</p>
            <p><strong>Category:</strong> {state.showDetails.category}</p>
            <button
              onClick={() => dispatch({ type: "CLOSE_DETAILS" })}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
