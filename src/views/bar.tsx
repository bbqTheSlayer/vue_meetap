import type {IMusic} from "@/views/AudioPage";

export const Bar = (props: any) => {
    const list: IMusic[] = props.state.list
    return (
        <div class="bar">
            {
                list.map((item) => {
                    return <div>{item.label}</div>
                })
            }
        </div>
    )
}