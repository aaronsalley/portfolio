enum Platform {
  android,
  mac,
  web,
}

const PlatformList = ({
  platforms,
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <div>
      Avaliable for:
      <ul>{}</ul>
    </div>
  );
};

export default PlatformList;
