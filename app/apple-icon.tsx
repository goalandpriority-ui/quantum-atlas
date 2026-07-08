import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#3454D1",
          borderRadius: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <div style={{ fontSize: 90, color: "white" }}>⚛</div>
        <div style={{
          fontSize: 22,
          color: "white",
          fontFamily: "serif",
          fontWeight: "bold",
          letterSpacing: 1,
        }}>QA</div>
      </div>
    ),
    { ...size }
  );
}
