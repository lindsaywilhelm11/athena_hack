import Data from "../mock-data.json"
import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("")
  return (
    <div>
      <input placeholder='Enter Company Name or Post Code' onChange={e => setQuery(e.target.value)}/>
      <table>
        <tbody>
          <tr>
            <th>
              Employer Name
            </th>
            <th>
              Address
            </th>
            <th>
              Post Code
            </th>
            <th>
              View Information
            </th>
            </tr>
            </tbody>
            {
            Data.filter(post => {
              if (query === '') {
                return post;
              } else if (post.employer_name.toLowerCase().includes(query.toLowerCase())) {
                return post;
              }
            }).map((post, index) => (
              <tbody key = {index}>
                <tr>
                <td><p>{post.employer_name}</p></td>
                <td><p>{post.address}</p></td>
                <td><p>{post.post_code}</p></td>
                <td><button>View</button></td>
                </tr>
              </tbody>
            ))
          }
        
    </table>

    </div>
  )
}

export default Search