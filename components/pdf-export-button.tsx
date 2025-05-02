"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useCallback } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export function PdfExportButton() {
  const exportToPdf = useCallback(async () => {
    const examElement = document.getElementById("exam-paper")
    if (!examElement) return

    try {
      // Show loading state
      const button = document.getElementById("export-button")
      if (button) button.textContent = "Generating PDF..."

      // Create canvas from the exam element
      const canvas = await html2canvas(examElement, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      })

      // Calculate PDF dimensions (A4 portrait)
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      // Create PDF (always portrait)
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Add image to PDF
      const imgData = canvas.toDataURL("image/png")

      // If the image is taller than a page, split it across multiple pages
      let heightLeft = imgHeight
      let position = 0
      let pageOffset = 0

      // Add first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Add subsequent pages if needed
      while (heightLeft > 0) {
        position = -pageHeight * pageOffset
        pageOffset++
        pdf.addPage()
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Save PDF
      pdf.save("exam-paper.pdf")

      // Reset button text
      if (button) button.textContent = "Export to PDF"
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to generate PDF. Please try again.")

      // Reset button text on error
      const button = document.getElementById("export-button")
      if (button) button.textContent = "Export to PDF"
    }
  }, [])

  return (
    <Button id="export-button" onClick={exportToPdf} className="fixed bottom-4 right-4 print:hidden">
      <Download className="mr-2 h-4 w-4" /> Export to PDF
    </Button>
  )
}
