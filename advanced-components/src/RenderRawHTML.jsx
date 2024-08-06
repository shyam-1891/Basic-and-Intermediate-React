import React from "react";

function RenderRawHTML() {
  const CustomHTML =
    "<h2>Hello this is custom H1</h2><p>Dramatically redefine compelling catalysts for change through interdependent core competencies. Collaboratively reconceptualize go forward solutions vis-a-vis functionalized alignments. Efficiently enable innovative e-markets rather than high-quality.</p>";
  return <div dangerouslySetInnerHTML={{ __html: CustomHTML }}></div>;
}

export default RenderRawHTML;
