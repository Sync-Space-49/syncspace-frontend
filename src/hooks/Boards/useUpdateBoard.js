import { useAuth0 } from "@auth0/auth0-react"
import { useMatch } from "react-router"
import { serverAddress } from "../.."
import axios from "axios"

export const useUpdateBoard = () => {
    const { getAccessTokenSilently } = useAuth0()

    const match = useMatch("/organization/:orgId/:boardId/update")
    const orgId = match.params.orgId
    const boardId = match.params.orgId

    const updateBoard = async ({title, newTitle, description, newDescription}) => {
        if (newTitle === "none"){
            newTitle = title
        }
        else if( newDescription === "none"){
            newDescription = description
        }

        console.log(title, " ", newTitle, " ", description, " ", newDescription)

        let token = getAccessTokenSilently()
    
        const options = {
          method: 'PUT',
          url: `${serverAddress}/api/organizations/${orgId}/boards/${boardId}`,          
          params: {
            description: newDescription,
            title: newTitle
          },
          headers: {
              'Authorization': `Bearer ${token}`
          }
        };  
    
        await axios
          .request(options)
          .then(function (res) {
            console.log(res)
          })
          .catch(function (error) {
              console.error(error);
          });  
    }

    return { updateBoard }
}