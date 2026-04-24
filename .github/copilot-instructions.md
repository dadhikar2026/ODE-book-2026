# Copilot Instructions for ODE Book 2026

## Project Overview
This is a **PreTeXt-based textbook** on "Elementary Ordinary Differential Equations: Methods and Applications." PreTeXt is an XML-based authoring system that compiles to HTML, PDF, and other formats. The book is built and deployed using the PreTeXt CLI tool.

## Key Architecture & File Structure

### Core Files
- **source/main.ptx**: Root file that includes all chapters via `<xi:include>` directives
- **source/docinfo.ptx**: Metadata (author, title, versioning)
- **source/ch-*.ptx**: Chapters (currently ch-1, ch-2, ch-3, ch-4, ch-5, ch-7)
- **source/sec-*.ptx**: Sections within chapters (e.g., sec-5-6 for systems of linear DE)
- **publication/publication.ptx**: Output configuration (HTML chunking, exercise visibility, numbering levels)

### Build Artifacts
- **output/web/**: HTML web output (main deliverable)
- **output/print/**: PDF print output
- **output/stage/**: Staging build (for preview)
- **generated-assets/**: LaTeX images, sageplot outputs (auto-generated)

## Essential Workflows

### Build Commands
```bash
# Build web (HTML) output to output/web/
pretext build web

# Build print (PDF) output
pretext build print

# Preview in browser (live reload)
pretext view web

# Build specific component with preview
pretext build web --xmlid sec-5-6 --no-knowls

# Deploy to GitHub Pages
pretext deploy
```

### File Organization Pattern
- Each chapter/section is a separate `.ptx` file to enable modular editing
- Sections include `<xi:include>` for subsections (if any)
- Use `xml:id` attributes for cross-referencing (e.g., `xml:id="sec-5-6"`)
- Math uses LaTeX notation wrapped in `<m>...</m>` (inline) or `<me>...</me>` (display)
- Complex equations/diagrams: use `<latex-image>` blocks for generated images

## Critical Conventions

### XML Structure
- **Always include XML declaration**: `<?xml version="1.0" encoding="UTF-8"?>`
- **Use proper PreTeXt tags**: `<section>`, `<subsection>`, `<p>`, `<ul>`, `<li>`, `<em>`, `<term>` (not HTML tags)
- **Cross-references**: Use `<xref ref="xml-id">` to link to chapters/sections/equations
- **Namespaces**: Include `xmlns:xi="http://www.w3.org/2001/XInclude"` when using includes

### Content Structure Example
```xml
<section xml:id="sec-5-6">
  <title>Systems of Linear Differential Equations</title>
  <introduction>
    <!-- Overview paragraph -->
  </introduction>
  <subsection xml:id="subsec-laplace-transform-method">
    <title>The Laplace Transform Method</title>
    <!-- Content -->
  </subsection>
</section>
```

## Dependencies & Tools
- **PreTeXt 2.38.1**: Specified in requirements.txt
- **CodeChat config**: codechat_config.yaml enables live preview integration
- **LaTeX**: For generating images; TeXLive packages may need installation if build fails on `<latex-image>` blocks

## External Assets
- **CSS**: assets/custom.css
- **Images**: assets/images/
- **JavaScript**: assets/print.js for print handling
- **Generated assets**: generated-assets/latex-image/, generated-assets/sageplot/ (auto-created, don't edit)

## Common Tasks for AI Agents

1. **Adding new content**: Create `source/sec-X-Y.ptx`, add `<xi:include href="./sec-X-Y.ptx" />` to parent chapter in source/main.ptx
2. **Fixing math rendering**: Check for unclosed `<m>` tags, ensure math is valid LaTeX
3. **Updating cross-references**: Edit `<xref ref="...">` and ensure target `xml:id` exists
4. **Adjusting publication settings**: Edit publication/publication.ptx for HTML chunking, exercise visibility, numbering
5. **Troubleshooting builds**: Run `pretext build web` to see full error output; check README.md section on "Troubleshooting" for LaTeX/SageMath issues
