# Design Guidelines: Project Uploader Backend Service (Phase 2)

## Design Approach
**System-Based Approach**: This backend service focuses on functional clarity and developer experience. Since this is an API service with no traditional UI, design guidelines focus on API documentation interface and any admin/testing panels.

## Optional API Documentation Interface

If implementing an API documentation page (Swagger UI or custom):

### Typography
- **Font Family**: Inter or System UI stack via Google Fonts
- **Hierarchy**: 
  - Headings: 24px (endpoint sections), 18px (method names), 16px (parameters)
  - Body: 14px for descriptions, 13px for code examples
  - Code blocks: JetBrains Mono or Fira Code at 13px

### Layout System
- **Spacing**: Use Tailwind units of 2, 4, 6, and 8 (p-4, m-6, gap-8)
- **Container**: max-w-6xl centered layout for documentation
- **Two-column layout**: Left sidebar (navigation), Right content area (endpoint details)

### Component Library

**Endpoint Cards**:
- Method badges: GET (green), POST (blue), PUT (orange), DELETE (red)
- Endpoint path in monospace font
- Collapsible request/response sections
- Code syntax highlighting for JSON examples

**Response Format Display**:
- Success responses: Green accent border
- Error responses: Red accent border  
- Status codes prominently displayed (200, 400, 500)
- JSON formatted with proper indentation

**Testing Interface** (optional):
- Simple form to test /api/upload endpoint
- File drag-and-drop zone with dashed border
- Upload button
- Response display area with formatted JSON

### Design Principles
1. **Clarity First**: Clear endpoint documentation with real examples
2. **Developer-Friendly**: Code-centric design with easy copy-paste
3. **Minimal Aesthetics**: Clean, distraction-free interface
4. **Responsive**: Mobile-friendly documentation viewing

## JSON Response Standards
Structure all API responses consistently:
```
Success: {status: "success", data: {...}, message: "..."}
Error: {status: "error", error: "...", details: {...}}
```

**No animations needed** - this is a functional backend service prioritizing clarity and performance.