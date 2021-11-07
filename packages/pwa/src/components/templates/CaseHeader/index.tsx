import React from "react";
import { useEffect, useRef } from "react";
import { RootState, useAppSelector } from "../../../../data/viewModel/store";
import { flatten } from "../../../../data/models/Project";
import ProjectHeader from "../../organisms/ProjectHeader";

const CaseHeader = ({
  ...project
}: React.ComponentProps<any>): React.ReactElement => {
  /**
   * Creates the list of platforms for which the
   * project is available.
   *
   * @returns ReactElement
   */
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

  /**
   * Creates the section that describes my role(s)
   * on the project.
   */
  const Role = (
    <section>
      <h4>Role</h4>
      {project.roles.join(", ")}
    </section>
  );

  /**
   * Creates the section that describes the timeframe
   * of the project.
   */
  const Timeframe = (
    <section>
      <h4>Timeframe</h4>
      {project.date}
    </section>
  );

  /**
   * Creates the section that describes the tool(s)
   * used on the project.
   */
  const Tools = (
    <section>
      <h4>Tools</h4>
      {project.tools.join(", ")}
    </section>
  );

  /**
   * Creates the project image display.
   *
   * @param props
   * @returns ReactElement
   */
  const Device = ({
    theme = useAppSelector((state: RootState) => state.colorScheme),
    draw,
    ...rest
  }: any): React.ReactElement => {
    const deviceRef = useRef(null);

    useEffect(() => {
      const canvas = deviceRef.current as any;
      const context = canvas.getContext("2d");
      let frameCount = 0;
      let animationFrameId: any;

      const render = () => {
        frameCount++;
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }, [draw]);

    return <canvas ref={deviceRef} {...rest} />;
  };

  /**
   * Creates the list of devices for which the
   * project has images.
   *
   * @returns ReactElement
   */
  const DeviceSelection = ({
    theme = useAppSelector((state: RootState) => state.colorScheme),
  }): React.ReactElement => {
    let devices: React.ReactElement[] = [];

    const images = flatten(project.images[theme]);

    for (const [device, image] of Object.entries(images)) {
      if (image) {
        devices.push(
          <li key={device}>
            <button onClick={handleDeviceSelection} value={device as string}>
              <i>{device}</i>
            </button>
          </li>
        );
      }
    }

    return <menu>{devices}</menu>;
  };

  const draw = (ctx: any, frameCount: any) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  /**
   * Handles the interaction that changes
   * the project image.
   *
   * @param e Element
   * @returns
   */
  const handleDeviceSelection = (e: any): any => {
    const image = e.target.closest("button").value;
    // TODO: change canvas image
    return;
  };

  return (
    <React.Fragment>
      <ProjectHeader {...project} />
      <AvailableFor />
      <DeviceSelection />
      <Device draw={draw} />
      <div>
        {Role}
        {Timeframe}
        {Tools}
      </div>
    </React.Fragment>
  );
};

export default CaseHeader;
