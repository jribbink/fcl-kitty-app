import Kitty from "models/Kitty"
import KittyItem from "./KittyCard"

type KittyGridProps = {}

enum KittyColors {
    blue = "#d3e8ff",
    teal = "#c5eefa",
    pink = "#fde9e4",
    green = "#d9f5cb",
    brown = "#eee9e8",
    yellow = "#faf4cf",
    purple = "#ede2f5"
}

const kitties: Kitty[] = [
    {
        id: 1,
        name: "Krumel Sadmuffin",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1877766.svg",
        price: 2,
        color: KittyColors.purple
    },
    {
        id: 2,
        name: "2 cali swamp 3 sap 2r beard",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/610361.svg",
        price: 5,
        color: KittyColors.green
    },
    {
        id: 3,
        name: "Kitty #611760",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/611760.svg",
        price: 13,
        color: KittyColors.yellow
    },
    {
        id: 4,
        name: "Kitty #615027",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/615027.svg",
        price: 12,
        color: KittyColors.blue
    },
    {
        id: 5,
        name: "3/4 x3 safe hima R1 peach",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/624310.svg",
        price: 25,
        color: KittyColors.blue
    },
    {
        id: 6,
        name: "Kitty #624327",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/624327.svg",
        price: 5,
        color: KittyColors.yellow
    },
    {
        id: 7,
        name: "Offspring Puss for Progress",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/625724.svg",
        price: 245,
        color: KittyColors.pink
    },
    {
        id: 8,
        name: "Kitty #626293",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/626293.svg",
        price: 5,
        color: KittyColors.green
    },
    {
        id: 9,
        name: "Kitty #628870",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/628870.svg",
        price: 18,
        color: KittyColors.teal
    },
    {
        id: 10,
        name: "Brigliador Benoit",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/629583.svg",
        price: 3,
        color: KittyColors.brown
    },
    {
        id: 11,
        name: "Kitty #630645",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/630645.svg",
        price: 1,
        color: KittyColors.blue
    },
    {
        id: 12,
        name: "2/5 R1 Thunderstruck r3 dragon",
        url: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/630251.svg",
        price: 255,
        color: KittyColors.yellow
    },
]

export default (props: KittyGridProps) => {
    return (
        <div className="row">
            {kitties.map(kitty => (
                <KittyItem kitty={kitty} key={kitty.id}></KittyItem>
            ))}
        </div>
    )
}