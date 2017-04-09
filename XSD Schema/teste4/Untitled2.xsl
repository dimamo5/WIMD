<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
    <xsl:template match="/">
        <xsl:apply-templates select="//Department[@Code = 'EE']/Course"/>
    </xsl:template>

    <xsl:template match="Course">
        <Course>
            <xsl:attribute name="Number" select="./@Number"/>
            <xsl:attribute name="Title" select="./Title"/>
            <xsl:copy-of select="./Description"/>
            <xsl:apply-templates select="./Instructors/Professor/Last_Name"/>
        </Course>
    </xsl:template>
    
    <xsl:template match="Last_Name">
        <Instructor>
            <xsl:value-of select="."/>
        </Instructor>
    </xsl:template>
</xsl:stylesheet>
