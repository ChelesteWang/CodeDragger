interface selectedNode {
    tag: string
    properties: {
        width:{
            type: string
            value: number
            minimum: number
            maximum: number
            interaction: string
        },
        height:{
            type: string
            value: number
            minimum: number
            maximum: number
            interaction: string
        }
    }
}
export default selectedNode 