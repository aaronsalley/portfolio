import { flatten } from "../../../../data/models/Project";
import { Theme } from "../../../../data/models/themes";

const CaseHeader = ({
  project,
}: React.ComponentProps<any>): React.ReactElement => {
  const AvailableFor = (): React.ReactElement => {
    let platforms: React.ReactElement[] = [];

    for (const [platform, value] of Object.entries(project.platforms)) {
      platforms.push(
        <li className={value ? "available" : "unavailable"} key={platform}>
          {platform}
        </li>
      );
    }

    return (
      <div>
        Avaliable for:
        <ul>{platforms}</ul>
      </div>
    );
  };

  const DeviceSelection = (): React.ReactElement => {
    let devices: React.ReactElement[] = [];
    let theme: Theme = Theme.light; // <== TODO: Get actual theme color

    const images = flatten(project.featured_image[theme]);

    for (const [device, image] of Object.entries(images)) {
      if (image) {
        devices.push(
          <li key={device}>
            <button onClick={handleDeviceSelection} value={image as string}>
              <i>{device}</i>
            </button>
          </li>
        );
      }
    }

    return <menu>{devices}</menu>;
  };

  const handleDeviceSelection = (e: any): any => {
    const image = e.target.closest("button").value;
    // TODO: change canvas image
    return;
  };

  const Role = (): React.ReactElement => {
    return (
      <section>
        <h4>Role</h4>
        {project.roles.join(", ")}
      </section>
    );
  };

  const Timeframe = (): React.ReactElement => {
    return (
      <section>
        <h4>Timeframe</h4>
        {project.date}
      </section>
    );
  };

  const Tools = (): React.ReactElement => {
    return (
      <section>
        <h4>Tools</h4>
        {project.tools.join(", ")}
      </section>
    );
  };

  return (
    <header>
      <h1>
        <small>{project.title}</small>
        {project.client}
      </h1>
      <p>{project.summary}</p>
      <AvailableFor />
      <DeviceSelection />
      <canvas></canvas>
      <div>
        <Role></Role>
        <Timeframe></Timeframe>
        <Tools></Tools>
      </div>
    </header>
  );
};

export default CaseHeader;
