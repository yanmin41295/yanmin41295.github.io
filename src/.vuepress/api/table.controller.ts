import axios from "axios";

const service = axios.create({
        baseURL: "/api/table",
    }
)

service.interceptors.response.use((result) => {
    console.log(result.data)
    return result.data.data
})

export async function findById(name: string, body: any) {
    return await service.request<any>({
        url: `/findById?table=${ name }`,
        method: "post",
        data: body
    })

}

export async function getList(name: string, body: any) {
    return await service.request<{ list: any[], total: number }>({
        url: `/findList?table=${ name }`,
        method: "post",
        data: body
    })
}

export async function save(name: string, body: any) {
    return await service.request({
        url: `/save?table=${ name }`,
        method: "post",
        data: body
    })
}

export async function removeRow(name: string, body: any) {
    return await service.request({
        url: `/delete?table=${ name }`,
        method: "post",
        data: body
    })
}

