import "./style.css"
import type {IMusic} from "@/views/AudioPage";

export const Card = (props: any) => {
    const state = props.state
    const list = props.state.list
    return (
        <>
            {list.map((item: IMusic) => {
                return (
                    <div class="card" onClick={() => {
                        state.hidePlayer = true
                        state.item = item
                    }}>
                        <div class="cardImgBox">
                            <img class="cardImg" src={item.img} alt="img"/>
                        </div>
                        <div style={{
                            paddingLeft: "5px",
                            fontSize: "16px",
                            fontWeight: 700,
                            textAlign: "center",
                            color: "#fffff"
                        }}>{item.name}</div>
                        <div style={{paddingLeft: "5px", fontSize: "14px", textAlign: "center", color: "#fffff"}}>{item.label}</div>
                    </div>
                )
            })}
        </>
    )
}