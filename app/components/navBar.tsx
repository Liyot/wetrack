import NavBarButton from "@/app/components/navBarButton";
import LoginButton from "@/app/components/LoginButton";

export default function NavBar() {
  return (
    <div className={"size-full flex flex-row h-full pr-6 pl-40"}>
      <NavBarButton name={"Home"}/>
      <NavBarButton name={"About"}/>
      <LoginButton/>
    </div>
  )
}
