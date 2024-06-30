import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function TaleTubeSvg(props: any) {
  return (
    <Svg
      width={100}
      height={56}
      viewBox="45 0 100 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#pattern0_8_2)" d="M-30 0H158V56H-30z" />
      <Defs>
        <Pattern
          id="pattern0_8_2"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#image0_8_2"
            transform="matrix(.002 0 0 .00671 0 -1.179)"
          />
        </Pattern>
        <Image
          id="image0_8_2"
          width={500}
          height={500}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEaWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI0LTA2LTIzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmU3NTY3MGFkLWFmMzAtNGNjNS05MzZiLWQ4NjgyY2E3Y2U2NDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5UYWxlIC0gMTwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0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AOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADhHuAOAQ4Q4ADv0/yDt3MZFeB5kAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}

export default TaleTubeSvg;