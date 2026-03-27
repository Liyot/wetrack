type navBarButtonProps = {
  name: string,
  foldable?: boolean,
}

export default function NavBarButton(props: navBarButtonProps) {
  return (
    <div className={"flex w-10 h-full mr-28"}>
      <button className={"size-full hover:text-orange-400 transition-colors duration-300"}>
        <p>{props.name}</p>
      </button>
    </div>
  )
}
