<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:import href="/root/.ptx/2.44.0/core/xsl/pretext-html.xsl"/>

  <!-- Add Home and PDF links in the top navbar, then keep the standard Index button. -->
  <xsl:template match="*" mode="index-button">
    <a class="home-button button" href="index.html" title="Home">
      <xsl:call-template name="insert-symbol">
        <xsl:with-param name="name" select="'home'"/>
      </xsl:call-template>
      <span class="name">Home</span>
    </a>
    <a class="pdf-button button" href="./main.pdf" title="PDF">
      <xsl:call-template name="insert-symbol">
        <xsl:with-param name="name" select="'picture_as_pdf'"/>
      </xsl:call-template>
      <span class="name">PDF</span>
    </a>

    <xsl:if test="$the-index">
      <xsl:variable name="url">
        <xsl:apply-templates select="$the-index" mode="url" />
      </xsl:variable>
      <a class="index-button button" href="{$url}" title="Index">
        <xsl:call-template name="insert-symbol">
          <xsl:with-param name="name" select="'info'"/>
        </xsl:call-template>
        <span class="name">Index</span>
      </a>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>
