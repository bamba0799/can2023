import React from "react";
import { Circle, Path, Svg, SvgProps } from "react-native-svg";

export const HomeIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z" />
    </Svg>
  );
};
export const SelectIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
    </Svg>
  );
};

export const GroupIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z" />
      <Path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z" />
    </Svg>
  );
};

export const BallIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938 9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938 9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493 7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11 4.784 8.567a7.936 7.936 0 0 1 1.559-2.224 7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968 7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z" />
      <Path d="m8.5 11 1.5 4h4l1.5-4L12 8.5z" />
    </Svg>
  );
};

export const GiftIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
    </Svg>
  );
};

export const PlusIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
    </Svg>
  );
};

export const BackIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z" />
    </Svg>
  );
};

export const NextIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
    </Svg>
  );
};

export const MailIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
    </Svg>
  );
};

export const ShowIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z" />
      <Path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z" />
    </Svg>
  );
};

export const HideIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z" />
    </Svg>
  );
};

export const LocationCursorIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,

  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
      <Path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" />
    </Svg>
  );
};

export const PhoneIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z" />
    </Svg>
  );
};

export const SearchIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
    </Svg>
  );
};

export const PlayIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M7 6v12l10-6z" />
    </Svg>
  );
};

export const DoneIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
    </Svg>
  );
};

export const StadimIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M21 6c0-1.654-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2h-6.37A2.993 2.993 0 0 0 6 3C4.346 3 3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A2.997 2.997 0 0 0 3 18c0 1.654 1.346 3 3 3a2.993 2.993 0 0 0 2.815-2h6.369a2.994 2.994 0 0 0 2.815 2c1.654 0 3-1.346 3-3a2.997 2.997 0 0 0-2-2.816V8.816A2.996 2.996 0 0 0 21 6zm-3-1a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-2.815 12h-6.37A2.99 2.99 0 0 0 7 15.184V8.816A2.99 2.99 0 0 0 8.815 7h6.369A2.99 2.99 0 0 0 17 8.815v6.369A2.99 2.99 0 0 0 15.185 17zM6 5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm0 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm12 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z" />
    </Svg>
  );
};

export const GameIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M22 8.65A5 5 0 0 0 17 4H7a5 5 0 0 0-5 4.74A2 2 0 0 0 2 9v7.5A3.48 3.48 0 0 0 5.5 20c1.43 0 2.32-1.06 3.19-2.09.32-.37.65-.76 1-1.1a4.81 4.81 0 0 1 1.54-.75 6.61 6.61 0 0 1 1.54 0 4.81 4.81 0 0 1 1.54.75c.35.34.68.73 1 1.1.87 1 1.76 2.09 3.19 2.09a3.48 3.48 0 0 0 3.5-3.5V9a2.09 2.09 0 0 0 0-.26zm-2 7.85a1.5 1.5 0 0 1-1.5 1.5c-.5 0-1-.64-1.66-1.38-.34-.39-.72-.85-1.15-1.26a6.68 6.68 0 0 0-2.46-1.25 6.93 6.93 0 0 0-2.46 0 6.68 6.68 0 0 0-2.46 1.25c-.43.41-.81.87-1.15 1.26C6.54 17.36 6 18 5.5 18A1.5 1.5 0 0 1 4 16.5V9a.77.77 0 0 0 0-.15A3 3 0 0 1 7 6h10a3 3 0 0 1 3 2.72v.12A.86.86 0 0 0 20 9z" />
      <Circle
        cx={16}
        cy={12}
        r={1}
      />
      <Circle
        cx={18}
        cy={10}
        r={1}
      />
      <Circle
        cx={16}
        cy={8}
        r={1}
      />
      <Circle
        cx={14}
        cy={10}
        r={1}
      />
      <Circle
        cx={8}
        cy={10}
        r={2}
      />
    </Svg>
  );
};

export const HeartIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z" />
    </Svg>
  );
};

export const AboutIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M11 11h2v6h-2zm0-4h2v2h-2z" />
    </Svg>
  );
};

export const CoinIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 6C7.03 6 2 7.546 2 10.5v4C2 17.454 7.03 19 12 19s10-1.546 10-4.5v-4C22 7.546 16.97 6 12 6zm-8 8.5v-1.197a9.989 9.989 0 0 0 2 .86v1.881c-1.312-.514-2-1.126-2-1.544zm12 .148v1.971c-.867.179-1.867.31-3 .358v-2a21.75 21.75 0 0 0 3-.329zm-5 2.33a18.788 18.788 0 0 1-3-.358v-1.971c.959.174 1.972.287 3 .33v1.999zm7-.934v-1.881a9.931 9.931 0 0 0 2-.86V14.5c0 .418-.687 1.03-2 1.544zM12 13c-5.177 0-8-1.651-8-2.5S6.823 8 12 8s8 1.651 8 2.5-2.823 2.5-8 2.5z" />
    </Svg>
  );
};

export const TicketIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.001 12H4z" />
      <Path d="M6.5 11h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM6 14h6v2.001H6zm7 0h5v2.001h-5z" />
    </Svg>
  );
};

export const UserCircleIcon: React.FC<SvgProps> = ({
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  fill = "black",
  ...props
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      {...props}
    >
      <Path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z" />
      <Path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z" />
    </Svg>
  );
};
