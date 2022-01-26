import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { CATEGORIES_FRAGMENT, POSTS_FRAGMENT } from "../../fragments"
import { category, categoryVariables } from "../../__generated__/category"



export const Category = () => {
    const params = useParams()

    return <h1>카테고리</h1>
}