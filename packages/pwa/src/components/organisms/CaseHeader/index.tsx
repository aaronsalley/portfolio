import HardwareMenu from "../../molecules/menus/HardwareMenu";
import PlatformList from "../../molecules/PlatformList";

const CaseHeader = ({
  client,
  tagline,
  summary,
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <header>
      <h1>
        <small>{tagline ?? "Project tagline"}</small>
        {client ?? "Client Name"}
      </h1>
      <p>{summary ?? "A short blurb about the project."}</p>
      <aside>
        <PlatformList></PlatformList>
        <span></span>
        <HardwareMenu></HardwareMenu>
      </aside>
    </header>
  );
};

export default CaseHeader;
